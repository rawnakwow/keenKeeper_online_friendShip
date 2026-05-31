#  KeenKeeper — Keep Your Friendships Alive

> **🔗 Live Link:** [https://keenkeeper-onlien-friends.netlify.app]

##  Description
KeenKeeper is a high-fidelity, production-ready personal relationship tracking application built to manage real-life connections systematically. Developed precisely to professional design layouts using fluid responsive grids, semantic state tokening, and dynamic live data synchronization.

---

##  Key Features

*   **Live Interaction Analytics Panel**
    Tracks relationship telemetry in real-time. Automatically parses dataset schemas to compute counts across four functional states: *Total Friends*, *On Track*, *Due Soon*, and *Overdue*.
*   **Parameterized Detail Workspaces & Stateful Check-Ins**
    Features independent parameterized workspaces (`/friend/:id`) loaded via custom context routers. Includes responsive communication triggers (`Call`, `Text`, `Video`) that dynamically write to global application history and fire clean feedback alerts.
*   **Dynamic Chronological Timeline Filters**
    Consolidates logged contact events in a central hub. Features asynchronous selector filtration pipelines to isolate interaction histories seamlessly by specific communication types.

---

##  Technologies Used


| Technology | Purpose |
| :--- | :--- |
| **React.js** (v18+) | Component-Driven Virtual DOM UI Engineering |
| **React Router DOM** (v6+) | Stateful Param Routing & Global Layout Context Lifting |
| **Tailwind CSS** (v4.0) | High-Utility Presentation Engine |
| **daisyUI** (v5.0) | Semantic Component Architecture Layout Framework |
| **Recharts** | Vector Graphic (SVG) Responsive Data Visualizations |
| **React Hot Toast** | Asynchronous Action Alert Infrastructure |

---

##  Installation & Local Setup

Get local development workspace cloned, bundled, and operational under two minutes by executing these sequential command strings inside your shell repository:

1. **Clone the project repository:**
   ```bash
   git clone https://github.com/rawnakwow/keenKeeper_online_friendShip.git
   ```

2. **Step inside the absolute root directory:**
   ```bash
   cd keenkeeper
   ```

3. **Install exact node dependency manifests:**
   ```bash
   npm install
   ```

4. **Fire up the hot-reloading native Vite web builder:**
   ```bash
   npm run dev
   ```

---

## 📱 Full Responsive Adaptation
The interface incorporates mobile-first design engineering. Component modules collapse elegantly through standard fluid layouts across all device scopes:
*   **Mobile Screens:** Dropdown-based actions, stacked status rows, single-column profile card streams.
*   **Tablets:** Two-column statistics dashboards, grid columns adjusted to double pairs (`grid-cols-2`).
*   **Desktop & Large Monitors:** Full multi-column navigation lanes, dense horizontal summary grids, four-column card configurations (`lg:grid-cols-4`).
