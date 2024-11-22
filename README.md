
---

# **React Icon Picker Component**

A customizable React component for selecting and displaying icons using the **Feather Icons** library. This project demonstrates dynamic icon rendering, pagination, and selection using React.

---

## **Features**

- **Dynamic Icon Picker**: Opens a picker on clicking a 100x100 `div` and displays a list of Feather Icons.
- **Customizable Props**:
  - **`rowsInOnePage`**: Number of rows of icons per page.
  - **`columnsInOnePage`**: Number of columns of icons per page.
  - **`iconHeight`** and **`iconWidth`**: Dimensions of each icon.
  - **`pickerHeight`** and **`pickerWidth`**: Dimensions of the icon picker (default is `500px`).
- **Pagination**: Handles overflow by paginating icons across multiple pages.
- **Dynamic Behavior**: Picker opens on clicking the `div` and closes when an icon is selected, displaying the selected icon.
- **Responsive and Styled**: Comes with pre-defined CSS for smooth UI/UX.

---

## **Demo**

Here’s a preview of how the component works:

1. Initially, a `div` displays a placeholder or the selected icon.
2. Clicking the `div` opens the icon picker.
3. Selecting an icon closes the picker and updates the `div` with the selected icon.

---

## **Installation**

To use or run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-icon-picker.git
   ```

2. Navigate to the project folder:

   ```bash
   cd react-icon-picker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

---

## **Usage**

### **Props**

| Prop              | Type   | Default Value | Description                                                    |
|-------------------|--------|---------------|----------------------------------------------------------------|
| `rowsInOnePage`   | Number | Required      | Number of rows in one page of the picker.                     |
| `columnsInOnePage`| Number | Required      | Number of columns in one page of the picker.                  |
| `iconHeight`      | Number | Required      | Height of each icon in pixels.                                |
| `iconWidth`       | Number | Required      | Width of each icon in pixels.                                 |
| `pickerHeight`    | Number | 500           | Total height of the icon picker in pixels.                    |
| `pickerWidth`     | Number | 500           | Total width of the icon picker in pixels.                     |
| `onSelect`        | Func   | Required      | Callback function to handle icon selection.                   |

---

## **Dependencies**

This project uses the following dependencies:

- **React**: Frontend framework.
- **react-feather**: Feather Icons library for rendering icons.
- **CSS**: Custom styles for layout and design.

Install these dependencies using:

```bash
npm install react react-feather
```

---

## **Styling**

The component comes with pre-defined styles. You can find them in the `index.css` file or customize as needed.

---

## **Contributing**

Contributions are welcome! If you’d like to improve the project:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## **Acknowledgements**

- [Feather Icons](https://feathericons.com/) for providing an excellent open-source icon library.

---